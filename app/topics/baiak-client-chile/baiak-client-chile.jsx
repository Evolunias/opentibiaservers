import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-chile');
}

export default function BaiakClientChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-chile" />;
}
