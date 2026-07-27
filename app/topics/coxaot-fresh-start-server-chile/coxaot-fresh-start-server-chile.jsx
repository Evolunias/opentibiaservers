import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-chile');
}

export default function CoxaotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-chile" />;
}
