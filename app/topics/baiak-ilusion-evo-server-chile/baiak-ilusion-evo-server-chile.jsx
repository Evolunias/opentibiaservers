import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-evo-server-chile');
}

export default function BaiakIlusionEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-evo-server-chile" />;
}
