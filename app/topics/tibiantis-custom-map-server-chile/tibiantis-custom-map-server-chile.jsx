import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-chile');
}

export default function TibiantisCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-chile" />;
}
