import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fresh-start-server-chile');
}

export default function ArchlightFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-fresh-start-server-chile" />;
}
