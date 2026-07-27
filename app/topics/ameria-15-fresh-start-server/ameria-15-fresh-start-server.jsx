import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-fresh-start-server');
}

export default function Ameria15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-fresh-start-server" />;
}
