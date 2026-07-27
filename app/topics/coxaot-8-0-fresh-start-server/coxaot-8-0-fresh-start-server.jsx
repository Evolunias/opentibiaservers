import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-fresh-start-server');
}

export default function Coxaot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-fresh-start-server" />;
}
