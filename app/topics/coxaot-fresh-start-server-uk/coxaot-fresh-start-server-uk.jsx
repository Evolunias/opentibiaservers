import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-uk');
}

export default function CoxaotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-uk" />;
}
