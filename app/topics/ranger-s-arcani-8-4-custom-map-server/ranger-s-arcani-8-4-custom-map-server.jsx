import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-4-custom-map-server');
}

export default function RangerSArcani84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-4-custom-map-server" />;
}
