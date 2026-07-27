import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-chile');
}

export default function RealestaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-chile" />;
}
