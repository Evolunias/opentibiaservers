import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-argentina');
}

export default function RangerSArcaniCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-argentina" />;
}
