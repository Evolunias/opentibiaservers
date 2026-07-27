import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-fresh-start-server');
}

export default function Ameria96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-fresh-start-server" />;
}
