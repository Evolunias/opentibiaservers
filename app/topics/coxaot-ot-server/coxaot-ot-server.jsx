import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-ot-server');
}

export default function CoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-ot-server" />;
}
