import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-evo-server-chile');
}

export default function RubinotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-evo-server-chile" />;
}
