import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-high-exp-server-latin-america');
}

export default function CoxaotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-high-exp-server-latin-america" />;
}
