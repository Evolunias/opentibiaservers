import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-chile');
}

export default function LumineraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-chile" />;
}
