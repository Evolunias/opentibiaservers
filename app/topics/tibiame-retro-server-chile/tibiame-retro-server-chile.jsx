import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-retro-server-chile');
}

export default function TibiameRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-retro-server-chile" />;
}
