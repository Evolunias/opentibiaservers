import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-chile');
}

export default function TibiameBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-chile" />;
}
