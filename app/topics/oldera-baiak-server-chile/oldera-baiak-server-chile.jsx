import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-chile');
}

export default function OlderaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-chile" />;
}
