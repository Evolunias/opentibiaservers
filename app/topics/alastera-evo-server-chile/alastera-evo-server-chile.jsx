import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-chile');
}

export default function AlasteraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-chile" />;
}
