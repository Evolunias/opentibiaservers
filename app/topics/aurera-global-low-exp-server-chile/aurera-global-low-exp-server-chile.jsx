import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-low-exp-server-chile');
}

export default function AureraGlobalLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-low-exp-server-chile" />;
}
