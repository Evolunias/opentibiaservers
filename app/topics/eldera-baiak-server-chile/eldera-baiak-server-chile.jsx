import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-chile');
}

export default function ElderaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-chile" />;
}
