import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-chile');
}

export default function OxygenotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-chile" />;
}
