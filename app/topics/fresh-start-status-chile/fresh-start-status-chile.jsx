import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-chile');
}

export default function FreshStartStatusChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-chile" />;
}
