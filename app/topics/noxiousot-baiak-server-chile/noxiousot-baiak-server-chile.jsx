import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-baiak-server-chile');
}

export default function NoxiousotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-baiak-server-chile" />;
}
