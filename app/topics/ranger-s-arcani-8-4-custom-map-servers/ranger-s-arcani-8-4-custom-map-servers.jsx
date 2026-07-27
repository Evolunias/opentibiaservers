import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-4-custom-map-servers');
}

export default function RangerSArcani84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-4-custom-map-servers" />;
}
