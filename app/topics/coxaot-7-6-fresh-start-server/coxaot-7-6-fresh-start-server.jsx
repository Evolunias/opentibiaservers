import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-fresh-start-server');
}

export default function Coxaot76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-fresh-start-server" />;
}
