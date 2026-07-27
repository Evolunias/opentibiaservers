import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-similar-servers');
}

export default function AmeriaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-similar-servers" />;
}
