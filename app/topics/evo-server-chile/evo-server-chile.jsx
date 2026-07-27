import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-chile');
}

export default function EvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="evo-server-chile" />;
}
