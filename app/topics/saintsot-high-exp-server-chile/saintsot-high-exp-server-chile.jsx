import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-chile');
}

export default function SaintsotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-chile" />;
}
