import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-latin-america');
}

export default function CoxaotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-latin-america" />;
}
