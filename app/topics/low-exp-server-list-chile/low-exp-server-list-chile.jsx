import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-list-chile');
}

export default function LowExpServerListChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-list-chile" />;
}
