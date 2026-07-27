import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-discord');
}

export default function CustomGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-discord" />;
}
