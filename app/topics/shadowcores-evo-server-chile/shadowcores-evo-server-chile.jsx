import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-chile');
}

export default function ShadowcoresEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-chile" />;
}
