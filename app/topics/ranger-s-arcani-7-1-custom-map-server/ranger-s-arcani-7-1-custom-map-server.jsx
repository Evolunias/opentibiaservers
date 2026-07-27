import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-1-custom-map-server');
}

export default function RangerSArcani71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-1-custom-map-server" />;
}
