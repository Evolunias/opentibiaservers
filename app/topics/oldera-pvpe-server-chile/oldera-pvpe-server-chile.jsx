import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-chile');
}

export default function OlderaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-chile" />;
}
