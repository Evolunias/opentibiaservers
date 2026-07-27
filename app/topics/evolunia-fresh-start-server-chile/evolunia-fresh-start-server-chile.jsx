import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fresh-start-server-chile');
}

export default function EvoluniaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fresh-start-server-chile" />;
}
