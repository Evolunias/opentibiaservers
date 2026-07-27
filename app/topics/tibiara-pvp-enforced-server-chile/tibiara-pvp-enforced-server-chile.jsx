import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-chile');
}

export default function TibiaraPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-chile" />;
}
