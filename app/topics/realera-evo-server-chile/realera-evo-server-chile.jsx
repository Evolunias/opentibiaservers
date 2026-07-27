import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-chile');
}

export default function RealeraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-chile" />;
}
