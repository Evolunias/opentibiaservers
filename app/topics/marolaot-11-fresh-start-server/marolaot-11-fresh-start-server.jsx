import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-fresh-start-server');
}

export default function Marolaot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-fresh-start-server" />;
}
