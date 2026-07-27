import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-fresh-start-server');
}

export default function Coxaot74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-fresh-start-server" />;
}
