import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-europe-server');
}

export default function AmeriaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-europe-server" />;
}
