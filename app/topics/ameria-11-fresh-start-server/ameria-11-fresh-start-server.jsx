import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-fresh-start-server');
}

export default function Ameria11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-fresh-start-server" />;
}
