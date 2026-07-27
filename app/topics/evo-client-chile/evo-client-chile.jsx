import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-chile');
}

export default function EvoClientChileKeywordPage() {
  return <StaticKeywordPage slug="evo-client-chile" />;
}
