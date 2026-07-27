import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-chile');
}

export default function ArchlightPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-chile" />;
}
