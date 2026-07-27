import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-pvp-enforced-server-chile');
}

export default function RealestaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-pvp-enforced-server-chile" />;
}
