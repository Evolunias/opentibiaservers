import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvpe-server-chile');
}

export default function TibianusPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvpe-server-chile" />;
}
