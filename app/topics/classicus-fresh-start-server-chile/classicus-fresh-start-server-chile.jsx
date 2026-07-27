import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-chile');
}

export default function ClassicusFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-chile" />;
}
