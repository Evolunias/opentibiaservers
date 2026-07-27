import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-6-custom-map-servers');
}

export default function RangerSArcani86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-6-custom-map-servers" />;
}
