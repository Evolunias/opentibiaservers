import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-fresh-start-server');
}

export default function Ameria74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-fresh-start-server" />;
}
