import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-evo-server-chile');
}

export default function NilotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-evo-server-chile" />;
}
