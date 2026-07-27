import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-custom-map-servers');
}

export default function RangerSArcani15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-custom-map-servers" />;
}
