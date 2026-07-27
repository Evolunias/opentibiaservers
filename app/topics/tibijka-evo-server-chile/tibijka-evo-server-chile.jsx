import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-chile');
}

export default function TibijkaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-chile" />;
}
