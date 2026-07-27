import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-uk');
}

export default function CoxaotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-uk" />;
}
