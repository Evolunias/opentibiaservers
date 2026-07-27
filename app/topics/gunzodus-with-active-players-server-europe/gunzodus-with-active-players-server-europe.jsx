import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-europe');
}

export default function GunzodusWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-europe" />;
}
