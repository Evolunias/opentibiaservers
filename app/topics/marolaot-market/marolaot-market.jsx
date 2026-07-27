import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-market');
}

export default function MarolaotMarketKeywordPage() {
  return <StaticKeywordPage slug="marolaot-market" />;
}
