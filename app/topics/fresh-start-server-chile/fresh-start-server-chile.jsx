import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-chile');
}

export default function FreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-chile" />;
}
