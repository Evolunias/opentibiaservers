import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-retro-server-chile');
}

export default function ArcaniarlRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-retro-server-chile" />;
}
