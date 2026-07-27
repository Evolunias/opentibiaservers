import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-chile');
}

export default function EvoluniaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-chile" />;
}
