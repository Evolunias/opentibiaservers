import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-98-custom-map-server');
}

export default function RangerSArcani1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-98-custom-map-server" />;
}
