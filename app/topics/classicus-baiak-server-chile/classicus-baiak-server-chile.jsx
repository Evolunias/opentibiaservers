import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-chile');
}

export default function ClassicusBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-chile" />;
}
