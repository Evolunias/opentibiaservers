import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-chile');
}

export default function TibianusBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-chile" />;
}
