import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-mexico');
}

export default function AmeriaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-mexico" />;
}
