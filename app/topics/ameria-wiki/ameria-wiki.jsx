import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-wiki');
}

export default function AmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="ameria-wiki" />;
}
