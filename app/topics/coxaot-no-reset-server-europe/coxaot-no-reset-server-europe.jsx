import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-europe');
}

export default function CoxaotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-europe" />;
}
