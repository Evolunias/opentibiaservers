import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-chile');
}

export default function EvoServersChileKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-chile" />;
}
