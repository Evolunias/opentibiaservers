import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-chile');
}

export default function AureraGlobalRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-chile" />;
}
