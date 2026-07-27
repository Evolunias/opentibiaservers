import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-chile');
}

export default function CoxaotEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-chile" />;
}
