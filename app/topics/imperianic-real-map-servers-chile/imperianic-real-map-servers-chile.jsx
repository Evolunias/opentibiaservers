import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-chile');
}

export default function ImperianicRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-chile" />;
}
