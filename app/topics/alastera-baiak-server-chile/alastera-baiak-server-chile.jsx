import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-chile');
}

export default function AlasteraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-chile" />;
}
