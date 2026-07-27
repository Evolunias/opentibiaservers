import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-chile');
}

export default function OriginaltibiaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-chile" />;
}
