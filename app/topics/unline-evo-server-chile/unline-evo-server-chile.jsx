import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-chile');
}

export default function UnlineEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-chile" />;
}
