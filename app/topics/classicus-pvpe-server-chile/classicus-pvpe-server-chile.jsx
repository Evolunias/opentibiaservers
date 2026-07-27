import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvpe-server-chile');
}

export default function ClassicusPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvpe-server-chile" />;
}
