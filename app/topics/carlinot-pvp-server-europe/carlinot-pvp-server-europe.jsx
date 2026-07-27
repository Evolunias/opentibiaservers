import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-europe');
}

export default function CarlinotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-europe" />;
}
