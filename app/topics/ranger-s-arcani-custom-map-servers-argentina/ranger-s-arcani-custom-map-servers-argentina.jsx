import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-argentina');
}

export default function RangerSArcaniCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-argentina" />;
}
