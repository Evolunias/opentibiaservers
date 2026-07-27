import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-fresh-start-server');
}

export default function Marolaot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-fresh-start-server" />;
}
