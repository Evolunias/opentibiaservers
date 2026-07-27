import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map');
}

export default function RangerSArcaniRealMapKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map" />;
}
