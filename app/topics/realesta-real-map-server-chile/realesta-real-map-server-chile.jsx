import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-chile');
}

export default function RealestaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-chile" />;
}
