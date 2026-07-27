import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-chile');
}

export default function BaiakServerListChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-chile" />;
}
