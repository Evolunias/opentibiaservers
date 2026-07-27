import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-custom-map-servers');
}

export default function RangerSArcani14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-custom-map-servers" />;
}
