import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-no-reset-server-chile');
}

export default function ArchlightNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-no-reset-server-chile" />;
}
