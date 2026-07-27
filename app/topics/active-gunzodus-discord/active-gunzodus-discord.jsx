import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-discord');
}

export default function ActiveGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-discord" />;
}
