import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-wars');
}

export default function RangerSArcaniWarsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-wars" />;
}
