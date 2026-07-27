import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-chile');
}

export default function ThorniaBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-chile" />;
}
