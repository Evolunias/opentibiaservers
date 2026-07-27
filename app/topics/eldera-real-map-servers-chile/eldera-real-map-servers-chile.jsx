import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-chile');
}

export default function ElderaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-chile" />;
}
