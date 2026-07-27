import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-high-exp-server-chile');
}

export default function AureraGlobalHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-high-exp-server-chile" />;
}
