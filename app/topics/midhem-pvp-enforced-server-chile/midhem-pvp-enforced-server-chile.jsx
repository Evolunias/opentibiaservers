import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-enforced-server-chile');
}

export default function MidhemPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-enforced-server-chile" />;
}
