import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-discord');
}

export default function PopularGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-discord" />;
}
