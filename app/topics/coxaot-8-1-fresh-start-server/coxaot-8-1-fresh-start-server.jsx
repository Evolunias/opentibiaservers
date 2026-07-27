import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-fresh-start-server');
}

export default function Coxaot81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-fresh-start-server" />;
}
