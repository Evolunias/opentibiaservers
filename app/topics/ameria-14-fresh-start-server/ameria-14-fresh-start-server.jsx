import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-fresh-start-server');
}

export default function Ameria14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-fresh-start-server" />;
}
