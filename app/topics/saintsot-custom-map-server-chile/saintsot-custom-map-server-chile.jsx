import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-server-chile');
}

export default function SaintsotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-server-chile" />;
}
