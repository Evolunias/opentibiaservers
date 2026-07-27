import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-ot-server');
}

export default function ActiveCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-ot-server" />;
}
