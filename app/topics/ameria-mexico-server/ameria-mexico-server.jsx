import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-mexico-server');
}

export default function AmeriaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-mexico-server" />;
}
