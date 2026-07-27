import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-98-custom-map-servers');
}

export default function RangerSArcani1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-98-custom-map-servers" />;
}
