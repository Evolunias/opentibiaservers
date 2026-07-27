import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-fresh-start-server');
}

export default function Ameria13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-fresh-start-server" />;
}
