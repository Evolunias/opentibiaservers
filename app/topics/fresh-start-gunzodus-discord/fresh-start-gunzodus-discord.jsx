import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-discord');
}

export default function FreshStartGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-discord" />;
}
