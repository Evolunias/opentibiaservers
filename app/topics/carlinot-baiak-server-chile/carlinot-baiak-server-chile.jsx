import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-baiak-server-chile');
}

export default function CarlinotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-baiak-server-chile" />;
}
