import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-real-map-server');
}

export default function RangerSArcani12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-real-map-server" />;
}
