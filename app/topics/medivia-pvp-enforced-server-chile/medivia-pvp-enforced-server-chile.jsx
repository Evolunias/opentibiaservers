import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-pvp-enforced-server-chile');
}

export default function MediviaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-pvp-enforced-server-chile" />;
}
