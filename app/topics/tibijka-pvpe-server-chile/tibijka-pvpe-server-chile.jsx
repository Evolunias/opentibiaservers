import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-chile');
}

export default function TibijkaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-chile" />;
}
