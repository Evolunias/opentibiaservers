import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-europe-servers');
}

export default function AmeriaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-europe-servers" />;
}
