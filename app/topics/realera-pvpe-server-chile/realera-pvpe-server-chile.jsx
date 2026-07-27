import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvpe-server-chile');
}

export default function RealeraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-pvpe-server-chile" />;
}
