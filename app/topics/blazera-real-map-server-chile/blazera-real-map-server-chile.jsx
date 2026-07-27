import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-chile');
}

export default function BlazeraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-chile" />;
}
