import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-south-america');
}

export default function RangerSArcaniCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-south-america" />;
}
