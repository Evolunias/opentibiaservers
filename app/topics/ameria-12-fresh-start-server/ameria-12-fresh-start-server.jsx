import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-fresh-start-server');
}

export default function Ameria12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-fresh-start-server" />;
}
