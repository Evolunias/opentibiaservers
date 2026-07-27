import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-usa');
}

export default function CoxaotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-usa" />;
}
