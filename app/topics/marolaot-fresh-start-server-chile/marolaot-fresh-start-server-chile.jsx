import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-chile');
}

export default function MarolaotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-chile" />;
}
