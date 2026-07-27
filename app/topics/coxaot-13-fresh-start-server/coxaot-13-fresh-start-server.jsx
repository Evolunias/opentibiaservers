import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-fresh-start-server');
}

export default function Coxaot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-fresh-start-server" />;
}
