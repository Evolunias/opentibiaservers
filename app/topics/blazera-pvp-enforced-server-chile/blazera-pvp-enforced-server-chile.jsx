import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-enforced-server-chile');
}

export default function BlazeraPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-enforced-server-chile" />;
}
