import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-brazil-server');
}

export default function CoxaotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-brazil-server" />;
}
