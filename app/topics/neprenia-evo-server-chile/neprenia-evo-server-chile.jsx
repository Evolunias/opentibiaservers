import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-chile');
}

export default function NepreniaEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-chile" />;
}
