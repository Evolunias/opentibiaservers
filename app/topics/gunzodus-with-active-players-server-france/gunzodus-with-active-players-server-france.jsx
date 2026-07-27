import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-france');
}

export default function GunzodusWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-france" />;
}
