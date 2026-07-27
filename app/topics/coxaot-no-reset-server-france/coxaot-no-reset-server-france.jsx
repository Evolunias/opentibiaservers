import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-france');
}

export default function CoxaotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-france" />;
}
