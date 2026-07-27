import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-canada');
}

export default function MarolaotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-canada" />;
}
