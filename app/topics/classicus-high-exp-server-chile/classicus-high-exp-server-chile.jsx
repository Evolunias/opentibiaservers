import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-chile');
}

export default function ClassicusHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-chile" />;
}
