import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-chile');
}

export default function ClassicusRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-chile" />;
}
