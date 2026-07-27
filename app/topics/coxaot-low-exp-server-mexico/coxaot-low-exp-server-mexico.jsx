import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-mexico');
}

export default function CoxaotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-mexico" />;
}
