import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-retro-server-chile');
}

export default function ClassicusRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-retro-server-chile" />;
}
