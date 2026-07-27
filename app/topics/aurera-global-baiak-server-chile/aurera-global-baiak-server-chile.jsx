import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-baiak-server-chile');
}

export default function AureraGlobalBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-baiak-server-chile" />;
}
