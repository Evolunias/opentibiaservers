import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-chile');
}

export default function MidhemEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-chile" />;
}
