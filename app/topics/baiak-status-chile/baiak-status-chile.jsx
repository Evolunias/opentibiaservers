import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-chile');
}

export default function BaiakStatusChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-chile" />;
}
