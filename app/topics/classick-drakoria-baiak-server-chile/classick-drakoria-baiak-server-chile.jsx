import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-baiak-server-chile');
}

export default function ClassickDrakoriaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-baiak-server-chile" />;
}
