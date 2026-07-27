import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-fresh-start-server');
}

export default function Marolaot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-fresh-start-server" />;
}
