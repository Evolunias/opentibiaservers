import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-servers-chile');
}

export default function TibiaraCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-servers-chile" />;
}
