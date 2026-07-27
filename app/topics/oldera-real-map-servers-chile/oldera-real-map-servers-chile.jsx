import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-chile');
}

export default function OlderaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-chile" />;
}
