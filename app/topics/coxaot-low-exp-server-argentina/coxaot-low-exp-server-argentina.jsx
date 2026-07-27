import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-argentina');
}

export default function CoxaotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-argentina" />;
}
