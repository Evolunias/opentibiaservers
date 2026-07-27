import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-uk');
}

export default function CarlinotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-uk" />;
}
