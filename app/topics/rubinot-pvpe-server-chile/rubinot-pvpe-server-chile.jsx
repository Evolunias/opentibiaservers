import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-chile');
}

export default function RubinotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-chile" />;
}
