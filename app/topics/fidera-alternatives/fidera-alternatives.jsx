import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-alternatives');
}

export default function FideraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="fidera-alternatives" />;
}
