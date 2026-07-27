import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-chile');
}

export default function ClassickDrakoriaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-chile" />;
}
