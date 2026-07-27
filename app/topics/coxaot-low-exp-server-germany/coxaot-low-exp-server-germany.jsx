import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-germany');
}

export default function CoxaotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-germany" />;
}
