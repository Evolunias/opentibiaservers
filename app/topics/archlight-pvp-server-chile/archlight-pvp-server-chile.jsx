import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-chile');
}

export default function ArchlightPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-chile" />;
}
