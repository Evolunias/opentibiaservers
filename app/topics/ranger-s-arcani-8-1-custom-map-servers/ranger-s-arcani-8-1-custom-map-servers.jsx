import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-1-custom-map-servers');
}

export default function RangerSArcani81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-1-custom-map-servers" />;
}
