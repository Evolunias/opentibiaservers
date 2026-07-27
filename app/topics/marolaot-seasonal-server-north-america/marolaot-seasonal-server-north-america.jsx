import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-north-america');
}

export default function MarolaotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-north-america" />;
}
