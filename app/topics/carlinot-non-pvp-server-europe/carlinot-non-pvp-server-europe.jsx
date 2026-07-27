import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-europe');
}

export default function CarlinotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-europe" />;
}
