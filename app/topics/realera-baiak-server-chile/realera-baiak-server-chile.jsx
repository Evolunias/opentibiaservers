import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-chile');
}

export default function RealeraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-chile" />;
}
