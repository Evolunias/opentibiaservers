import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-europe');
}

export default function CoxaotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-europe" />;
}
