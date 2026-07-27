import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvp-server-chile');
}

export default function CalmeraOtPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvp-server-chile" />;
}
