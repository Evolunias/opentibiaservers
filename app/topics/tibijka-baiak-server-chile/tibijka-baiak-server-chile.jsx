import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-baiak-server-chile');
}

export default function TibijkaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-baiak-server-chile" />;
}
