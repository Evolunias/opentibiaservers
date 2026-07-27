import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-chile');
}

export default function CarlinotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-chile" />;
}
