import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-sweden-server');
}

export default function CoxaotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-sweden-server" />;
}
