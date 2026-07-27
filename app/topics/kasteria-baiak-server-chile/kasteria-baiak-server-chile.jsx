import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-chile');
}

export default function KasteriaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-chile" />;
}
