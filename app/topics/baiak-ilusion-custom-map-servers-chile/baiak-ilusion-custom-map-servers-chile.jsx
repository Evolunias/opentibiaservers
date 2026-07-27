import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-chile');
}

export default function BaiakIlusionCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-chile" />;
}
