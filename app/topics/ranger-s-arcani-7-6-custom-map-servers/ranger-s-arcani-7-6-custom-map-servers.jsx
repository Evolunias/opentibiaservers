import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-custom-map-servers');
}

export default function RangerSArcani76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-custom-map-servers" />;
}
