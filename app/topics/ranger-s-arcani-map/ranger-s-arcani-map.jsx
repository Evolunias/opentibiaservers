import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-map');
}

export default function RangerSArcaniMapKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-map" />;
}
