import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-latin-america');
}

export default function GunzodusWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-latin-america" />;
}
