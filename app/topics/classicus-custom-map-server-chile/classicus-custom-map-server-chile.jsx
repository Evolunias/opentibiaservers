import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-chile');
}

export default function ClassicusCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-chile" />;
}
