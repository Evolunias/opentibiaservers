import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-chile');
}

export default function TibiaraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-chile" />;
}
