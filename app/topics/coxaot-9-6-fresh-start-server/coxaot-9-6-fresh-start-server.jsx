import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-fresh-start-server');
}

export default function Coxaot96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-fresh-start-server" />;
}
