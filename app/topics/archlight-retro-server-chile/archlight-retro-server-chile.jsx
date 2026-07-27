import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-chile');
}

export default function ArchlightRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-chile" />;
}
