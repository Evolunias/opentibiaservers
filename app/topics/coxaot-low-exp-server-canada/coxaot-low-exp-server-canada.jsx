import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-canada');
}

export default function CoxaotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-canada" />;
}
