import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-custom-map-servers-chile');
}

export default function SaintsotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-custom-map-servers-chile" />;
}
