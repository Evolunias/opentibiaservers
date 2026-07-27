import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-fresh-start-server');
}

export default function Coxaot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-fresh-start-server" />;
}
