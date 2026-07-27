import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-chile');
}

export default function SaintsotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-chile" />;
}
