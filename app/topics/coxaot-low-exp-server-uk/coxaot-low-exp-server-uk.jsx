import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-uk');
}

export default function CoxaotLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-uk" />;
}
