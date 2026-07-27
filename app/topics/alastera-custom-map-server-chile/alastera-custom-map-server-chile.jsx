import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-chile');
}

export default function AlasteraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-chile" />;
}
