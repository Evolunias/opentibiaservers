import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-chile');
}

export default function FreshStartClientChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-chile" />;
}
