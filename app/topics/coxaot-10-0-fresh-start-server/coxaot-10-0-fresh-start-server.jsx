import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-fresh-start-server');
}

export default function Coxaot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-fresh-start-server" />;
}
