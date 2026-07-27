import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-discord');
}

export default function OfficialGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-discord" />;
}
