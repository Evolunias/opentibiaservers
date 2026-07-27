import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-uk');
}

export default function CarlinotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-uk" />;
}
