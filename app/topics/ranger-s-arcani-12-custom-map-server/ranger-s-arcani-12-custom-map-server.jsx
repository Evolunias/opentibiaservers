import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-custom-map-server');
}

export default function RangerSArcani12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-custom-map-server" />;
}
