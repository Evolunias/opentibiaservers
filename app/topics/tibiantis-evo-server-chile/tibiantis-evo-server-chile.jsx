import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-chile');
}

export default function TibiantisEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-chile" />;
}
