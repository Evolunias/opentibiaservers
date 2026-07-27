import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-no-reset-server-chile');
}

export default function EvoluniaNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-no-reset-server-chile" />;
}
