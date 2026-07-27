import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-guide');
}

export default function RangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-guide" />;
}
