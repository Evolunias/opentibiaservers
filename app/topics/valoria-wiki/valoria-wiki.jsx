import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-wiki');
}

export default function ValoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="valoria-wiki" />;
}
