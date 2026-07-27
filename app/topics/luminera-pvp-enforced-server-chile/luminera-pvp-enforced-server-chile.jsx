import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-chile');
}

export default function LumineraPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-chile" />;
}
