import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-chile');
}

export default function OlderaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-chile" />;
}
