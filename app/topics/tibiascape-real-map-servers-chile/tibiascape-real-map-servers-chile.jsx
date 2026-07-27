import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-chile');
}

export default function TibiascapeRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-chile" />;
}
