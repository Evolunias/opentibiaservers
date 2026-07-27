import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-chile');
}

export default function BlazeraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-chile" />;
}
