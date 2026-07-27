import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-chile');
}

export default function MarolaotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-chile" />;
}
