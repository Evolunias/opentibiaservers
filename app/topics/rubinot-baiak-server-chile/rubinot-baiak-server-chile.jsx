import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-chile');
}

export default function RubinotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-chile" />;
}
