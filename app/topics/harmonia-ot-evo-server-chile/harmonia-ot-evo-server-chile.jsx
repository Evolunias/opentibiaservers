import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-evo-server-chile');
}

export default function HarmoniaOtEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-evo-server-chile" />;
}
