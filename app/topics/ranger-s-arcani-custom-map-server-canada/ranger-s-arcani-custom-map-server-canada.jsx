import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-canada');
}

export default function RangerSArcaniCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-canada" />;
}
