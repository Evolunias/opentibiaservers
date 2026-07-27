import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-fresh-start-server');
}

export default function Marolaot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-fresh-start-server" />;
}
