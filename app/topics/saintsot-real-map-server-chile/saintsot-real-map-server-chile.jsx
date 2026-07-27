import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-server-chile');
}

export default function SaintsotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-server-chile" />;
}
