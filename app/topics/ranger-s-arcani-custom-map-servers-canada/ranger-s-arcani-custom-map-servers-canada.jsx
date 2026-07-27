import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-canada');
}

export default function RangerSArcaniCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-canada" />;
}
