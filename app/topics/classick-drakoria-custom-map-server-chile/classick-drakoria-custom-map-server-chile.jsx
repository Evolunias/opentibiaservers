import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-chile');
}

export default function ClassickDrakoriaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-chile" />;
}
