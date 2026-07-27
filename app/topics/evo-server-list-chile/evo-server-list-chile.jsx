import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-chile');
}

export default function EvoServerListChileKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-chile" />;
}
