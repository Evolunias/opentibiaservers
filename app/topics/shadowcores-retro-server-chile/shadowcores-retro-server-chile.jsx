import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-chile');
}

export default function ShadowcoresRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-chile" />;
}
