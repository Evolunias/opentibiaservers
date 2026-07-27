import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-server-south-america');
}

export default function RangerSArcaniCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-server-south-america" />;
}
