import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-chile');
}

export default function UnlineRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-chile" />;
}
