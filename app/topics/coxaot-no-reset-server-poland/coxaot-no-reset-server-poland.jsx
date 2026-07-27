import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-poland');
}

export default function CoxaotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-poland" />;
}
