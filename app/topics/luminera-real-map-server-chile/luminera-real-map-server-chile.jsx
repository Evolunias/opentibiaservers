import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-chile');
}

export default function LumineraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-chile" />;
}
