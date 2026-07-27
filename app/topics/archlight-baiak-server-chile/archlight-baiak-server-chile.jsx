import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-chile');
}

export default function ArchlightBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-chile" />;
}
