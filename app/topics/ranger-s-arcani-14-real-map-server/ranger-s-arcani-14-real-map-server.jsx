import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-real-map-server');
}

export default function RangerSArcani14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-real-map-server" />;
}
