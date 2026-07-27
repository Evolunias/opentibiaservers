import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-chile');
}

export default function BaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-chile" />;
}
