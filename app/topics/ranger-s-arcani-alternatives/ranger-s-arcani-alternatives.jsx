import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-alternatives');
}

export default function RangerSArcaniAlternativesKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-alternatives" />;
}
