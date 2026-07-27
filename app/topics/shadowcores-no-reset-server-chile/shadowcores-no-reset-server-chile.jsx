import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-chile');
}

export default function ShadowcoresNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-chile" />;
}
