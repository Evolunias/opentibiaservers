import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-6-real-map-server');
}

export default function RangerSArcani86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-6-real-map-server" />;
}
