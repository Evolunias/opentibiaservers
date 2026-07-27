import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-chile');
}

export default function ElderaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-chile" />;
}
