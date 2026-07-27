import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-uk');
}

export default function AmeriaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-uk" />;
}
