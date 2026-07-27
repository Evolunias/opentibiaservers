import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-alternatives');
}

export default function RubinotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="rubinot-alternatives" />;
}
