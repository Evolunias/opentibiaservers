import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-poland');
}

export default function CoxaotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-poland" />;
}
