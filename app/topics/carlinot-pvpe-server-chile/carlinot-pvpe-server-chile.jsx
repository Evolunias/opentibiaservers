import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvpe-server-chile');
}

export default function CarlinotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvpe-server-chile" />;
}
