import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-mexico-servers');
}

export default function AmeriaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-mexico-servers" />;
}
