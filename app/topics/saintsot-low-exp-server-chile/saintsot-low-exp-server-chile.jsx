import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-chile');
}

export default function SaintsotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-chile" />;
}
