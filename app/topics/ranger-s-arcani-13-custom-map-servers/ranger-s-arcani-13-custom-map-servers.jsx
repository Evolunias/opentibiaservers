import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-custom-map-servers');
}

export default function RangerSArcani13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-custom-map-servers" />;
}
