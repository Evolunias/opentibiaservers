import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-brazil-servers');
}

export default function CoxaotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-brazil-servers" />;
}
