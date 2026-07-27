import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-real-map-servers-chile');
}

export default function ShadowcoresRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-real-map-servers-chile" />;
}
