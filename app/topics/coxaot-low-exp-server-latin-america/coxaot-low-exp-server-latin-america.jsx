import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-low-exp-server-latin-america');
}

export default function CoxaotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-low-exp-server-latin-america" />;
}
