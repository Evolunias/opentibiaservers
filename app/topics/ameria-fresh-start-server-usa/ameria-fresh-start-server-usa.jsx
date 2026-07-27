import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-usa');
}

export default function AmeriaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-usa" />;
}
