import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-retro-server-chile');
}

export default function NoxiousotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-retro-server-chile" />;
}
