import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-retro-server-chile');
}

export default function KasteriaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-retro-server-chile" />;
}
