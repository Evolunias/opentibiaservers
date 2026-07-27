import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-uk');
}

export default function GunzodusWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-uk" />;
}
