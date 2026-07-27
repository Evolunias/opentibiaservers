import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-argentina');
}

export default function CoxaotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-argentina" />;
}
