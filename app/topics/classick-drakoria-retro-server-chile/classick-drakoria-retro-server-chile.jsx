import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-retro-server-chile');
}

export default function ClassickDrakoriaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-retro-server-chile" />;
}
