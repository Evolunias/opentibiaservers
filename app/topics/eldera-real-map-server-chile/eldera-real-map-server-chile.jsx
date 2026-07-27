import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-chile');
}

export default function ElderaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-chile" />;
}
