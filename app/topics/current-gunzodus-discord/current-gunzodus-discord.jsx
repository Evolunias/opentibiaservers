import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-discord');
}

export default function CurrentGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-discord" />;
}
