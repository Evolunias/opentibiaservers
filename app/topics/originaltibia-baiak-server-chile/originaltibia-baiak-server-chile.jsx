import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-baiak-server-chile');
}

export default function OriginaltibiaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-baiak-server-chile" />;
}
