import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-fresh-start-server');
}

export default function Coxaot84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-fresh-start-server" />;
}
