import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-open-tibia-server-chile');
}

export default function BaiakOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-open-tibia-server-chile" />;
}
