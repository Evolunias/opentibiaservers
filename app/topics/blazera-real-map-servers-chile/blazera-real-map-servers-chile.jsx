import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-chile');
}

export default function BlazeraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-chile" />;
}
