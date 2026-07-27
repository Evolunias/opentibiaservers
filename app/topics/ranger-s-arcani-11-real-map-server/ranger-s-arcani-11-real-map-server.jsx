import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-real-map-server');
}

export default function RangerSArcani11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-real-map-server" />;
}
