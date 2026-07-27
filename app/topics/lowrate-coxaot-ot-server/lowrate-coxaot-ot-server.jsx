import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-ot-server');
}

export default function LowrateCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-ot-server" />;
}
