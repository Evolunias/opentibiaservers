import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-germany');
}

export default function RangerSArcaniRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-germany" />;
}
