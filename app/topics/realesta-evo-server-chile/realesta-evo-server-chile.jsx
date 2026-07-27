import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-chile');
}

export default function RealestaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-chile" />;
}
