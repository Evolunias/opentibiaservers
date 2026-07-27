import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-chile');
}

export default function CarlinotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-chile" />;
}
