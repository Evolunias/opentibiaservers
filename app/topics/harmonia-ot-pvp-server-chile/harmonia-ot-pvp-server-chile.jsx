import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvp-server-chile');
}

export default function HarmoniaOtPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvp-server-chile" />;
}
