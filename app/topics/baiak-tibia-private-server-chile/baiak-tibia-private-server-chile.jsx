import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibia-private-server-chile');
}

export default function BaiakTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibia-private-server-chile" />;
}
