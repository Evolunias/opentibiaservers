import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-real-map-server');
}

export default function RangerSArcani13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-real-map-server" />;
}
