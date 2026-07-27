import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-high-exp-server-chile');
}

export default function EvoluniaHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-high-exp-server-chile" />;
}
