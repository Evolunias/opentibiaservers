import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-alternatives');
}

export default function ThaisotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="thaisot-alternatives" />;
}
