import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-chile');
}

export default function OriginaltibiaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-chile" />;
}
