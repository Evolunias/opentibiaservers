import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-chile');
}

export default function SaintsotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-chile" />;
}
