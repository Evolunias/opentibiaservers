import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-low-exp-server-chile');
}

export default function ShadowcoresLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-low-exp-server-chile" />;
}
