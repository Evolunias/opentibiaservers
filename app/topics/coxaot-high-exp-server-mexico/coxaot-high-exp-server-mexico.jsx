import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-mexico');
}

export default function CoxaotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-mexico" />;
}
