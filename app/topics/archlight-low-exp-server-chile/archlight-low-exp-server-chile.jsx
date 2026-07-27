import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-low-exp-server-chile');
}

export default function ArchlightLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-low-exp-server-chile" />;
}
