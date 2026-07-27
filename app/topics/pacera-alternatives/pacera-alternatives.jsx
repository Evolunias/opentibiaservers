import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-alternatives');
}

export default function PaceraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="pacera-alternatives" />;
}
