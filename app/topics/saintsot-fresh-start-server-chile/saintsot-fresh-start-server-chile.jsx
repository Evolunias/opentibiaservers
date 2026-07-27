import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-chile');
}

export default function SaintsotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-chile" />;
}
