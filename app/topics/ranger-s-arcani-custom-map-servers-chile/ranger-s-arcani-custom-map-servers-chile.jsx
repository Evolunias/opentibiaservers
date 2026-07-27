import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-custom-map-servers-chile');
}

export default function RangerSArcaniCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-custom-map-servers-chile" />;
}
