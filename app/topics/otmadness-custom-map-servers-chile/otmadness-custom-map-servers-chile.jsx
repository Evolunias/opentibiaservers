import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-chile');
}

export default function OtmadnessCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-chile" />;
}
