import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-chile');
}

export default function AlasteraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-chile" />;
}
