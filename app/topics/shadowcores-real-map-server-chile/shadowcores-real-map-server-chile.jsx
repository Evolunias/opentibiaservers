import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-server-chile');
}

export default function ShadowcoresRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-server-chile" />;
}
