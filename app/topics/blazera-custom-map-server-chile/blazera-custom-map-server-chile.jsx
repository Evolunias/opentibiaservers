import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-chile');
}

export default function BlazeraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-chile" />;
}
