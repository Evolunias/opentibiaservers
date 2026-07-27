import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-chile');
}

export default function TibiaraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-chile" />;
}
