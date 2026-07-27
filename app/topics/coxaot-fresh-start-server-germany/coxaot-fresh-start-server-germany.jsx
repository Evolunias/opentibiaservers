import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-germany');
}

export default function CoxaotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-germany" />;
}
