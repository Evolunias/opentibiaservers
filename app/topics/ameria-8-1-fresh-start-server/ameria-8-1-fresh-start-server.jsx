import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-fresh-start-server');
}

export default function Ameria81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-fresh-start-server" />;
}
