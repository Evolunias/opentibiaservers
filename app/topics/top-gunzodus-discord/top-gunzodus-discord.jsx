import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-discord');
}

export default function TopGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-discord" />;
}
