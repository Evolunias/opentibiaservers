import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-chile');
}

export default function TibianusRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-chile" />;
}
