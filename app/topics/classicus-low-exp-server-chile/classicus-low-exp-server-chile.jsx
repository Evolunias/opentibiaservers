import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-chile');
}

export default function ClassicusLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-chile" />;
}
