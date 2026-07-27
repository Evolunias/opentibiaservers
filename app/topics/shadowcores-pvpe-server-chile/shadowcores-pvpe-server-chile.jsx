import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-chile');
}

export default function ShadowcoresPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-chile" />;
}
