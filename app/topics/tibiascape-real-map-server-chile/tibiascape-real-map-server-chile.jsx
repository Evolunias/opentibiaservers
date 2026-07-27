import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-chile');
}

export default function TibiascapeRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-chile" />;
}
