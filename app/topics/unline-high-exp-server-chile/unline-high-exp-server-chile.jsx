import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-chile');
}

export default function UnlineHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-chile" />;
}
