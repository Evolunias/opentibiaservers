import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-fresh-start-server');
}

export default function Ameria84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-fresh-start-server" />;
}
