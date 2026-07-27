import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-real-map-servers');
}

export default function RangerSArcani12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-real-map-servers" />;
}
