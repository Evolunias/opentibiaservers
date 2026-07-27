import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-real-map-servers-chile');
}

export default function SaintsotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-real-map-servers-chile" />;
}
