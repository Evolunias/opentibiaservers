import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-seasonal-server-mexico');
}

export default function MarolaotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-seasonal-server-mexico" />;
}
