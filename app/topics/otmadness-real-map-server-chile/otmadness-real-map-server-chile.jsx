import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-server-chile');
}

export default function OtmadnessRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-server-chile" />;
}
