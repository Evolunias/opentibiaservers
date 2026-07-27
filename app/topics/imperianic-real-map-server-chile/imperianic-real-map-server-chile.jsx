import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-chile');
}

export default function ImperianicRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-chile" />;
}
