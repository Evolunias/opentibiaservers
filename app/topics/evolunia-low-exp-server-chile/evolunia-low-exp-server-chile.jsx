import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-low-exp-server-chile');
}

export default function EvoluniaLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-low-exp-server-chile" />;
}
