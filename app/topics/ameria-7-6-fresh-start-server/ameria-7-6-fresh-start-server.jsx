import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-fresh-start-server');
}

export default function Ameria76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-fresh-start-server" />;
}
