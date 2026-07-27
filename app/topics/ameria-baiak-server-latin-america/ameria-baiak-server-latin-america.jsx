import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-latin-america');
}

export default function AmeriaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-latin-america" />;
}
