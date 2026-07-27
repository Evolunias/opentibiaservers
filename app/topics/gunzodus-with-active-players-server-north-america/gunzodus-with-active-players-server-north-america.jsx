import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-north-america');
}

export default function GunzodusWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-north-america" />;
}
