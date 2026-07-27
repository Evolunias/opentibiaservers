import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-canada');
}

export default function CoxaotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-canada" />;
}
