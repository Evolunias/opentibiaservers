import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvpe-server-chile');
}

export default function ClassickDrakoriaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvpe-server-chile" />;
}
