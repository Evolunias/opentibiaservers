import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-chile');
}

export default function ImperianicEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-chile" />;
}
