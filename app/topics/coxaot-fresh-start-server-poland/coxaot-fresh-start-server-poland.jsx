import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-fresh-start-server-poland');
}

export default function CoxaotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-fresh-start-server-poland" />;
}
