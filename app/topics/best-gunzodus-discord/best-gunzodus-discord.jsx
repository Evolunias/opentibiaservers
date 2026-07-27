import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-discord');
}

export default function BestGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-discord" />;
}
