import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-chile');
}

export default function TibiascapeCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-chile" />;
}
