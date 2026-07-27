import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-chile');
}

export default function ArchlightNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-chile" />;
}
