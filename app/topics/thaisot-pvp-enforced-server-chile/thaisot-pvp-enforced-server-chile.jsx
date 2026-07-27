import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-chile');
}

export default function ThaisotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-chile" />;
}
