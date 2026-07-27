import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-poland');
}

export default function RangerSArcaniRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-poland" />;
}
