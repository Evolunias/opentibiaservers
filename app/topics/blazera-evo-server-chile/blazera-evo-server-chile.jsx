import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-chile');
}

export default function BlazeraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-chile" />;
}
