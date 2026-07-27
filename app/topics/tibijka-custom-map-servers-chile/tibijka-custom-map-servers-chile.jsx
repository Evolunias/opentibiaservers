import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-chile');
}

export default function TibijkaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-chile" />;
}
