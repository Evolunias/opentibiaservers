import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-wars');
}

export default function AmeriaWarsKeywordPage() {
  return <StaticKeywordPage slug="ameria-wars" />;
}
