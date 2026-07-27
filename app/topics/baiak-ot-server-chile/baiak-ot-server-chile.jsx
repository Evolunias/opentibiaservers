import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-chile');
}

export default function BaiakOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-chile" />;
}
