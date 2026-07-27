import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-chile');
}

export default function BlazeraCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-chile" />;
}
