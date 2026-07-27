import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-discord');
}

export default function LowrateGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-discord" />;
}
