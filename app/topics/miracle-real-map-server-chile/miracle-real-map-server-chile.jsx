import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-chile');
}

export default function MiracleRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-chile" />;
}
