import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-chile');
}

export default function TibiantisCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-chile" />;
}
