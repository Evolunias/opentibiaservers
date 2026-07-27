import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvpe-server-chile');
}

export default function TibiaraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvpe-server-chile" />;
}
