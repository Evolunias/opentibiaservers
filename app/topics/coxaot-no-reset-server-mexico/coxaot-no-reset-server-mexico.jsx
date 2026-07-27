import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-mexico');
}

export default function CoxaotNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-mexico" />;
}
