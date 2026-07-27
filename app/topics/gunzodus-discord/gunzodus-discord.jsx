import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-discord');
}

export default function GunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-discord" />;
}
