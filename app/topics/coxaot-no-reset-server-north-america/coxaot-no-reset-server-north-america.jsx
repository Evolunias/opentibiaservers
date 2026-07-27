import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-north-america');
}

export default function CoxaotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-north-america" />;
}
