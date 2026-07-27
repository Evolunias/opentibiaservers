import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-custom-map-servers');
}

export default function RangerSArcani100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-custom-map-servers" />;
}
