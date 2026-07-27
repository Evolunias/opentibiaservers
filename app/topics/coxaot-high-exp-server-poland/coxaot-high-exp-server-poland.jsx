import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-poland');
}

export default function CoxaotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-poland" />;
}
