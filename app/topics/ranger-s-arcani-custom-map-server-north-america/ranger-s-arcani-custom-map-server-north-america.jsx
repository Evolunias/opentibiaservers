import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-north-america');
}

export default function RangerSArcaniCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-north-america" />;
}
