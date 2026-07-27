import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-list-chile');
}

export default function HighExpServerListChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-list-chile" />;
}
