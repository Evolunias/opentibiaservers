import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-high-exp-server-chile');
}

export default function ShadowcoresHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-high-exp-server-chile" />;
}
