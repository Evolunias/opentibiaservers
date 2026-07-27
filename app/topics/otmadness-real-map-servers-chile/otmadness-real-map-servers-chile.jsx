import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-chile');
}

export default function OtmadnessRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-chile" />;
}
