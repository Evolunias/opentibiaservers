import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-fresh-start-server');
}

export default function Marolaot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-fresh-start-server" />;
}
