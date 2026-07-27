import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-no-reset-server-chile');
}

export default function SaintsotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-no-reset-server-chile" />;
}
