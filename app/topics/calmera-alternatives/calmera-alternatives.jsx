import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-alternatives');
}

export default function CalmeraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="calmera-alternatives" />;
}
