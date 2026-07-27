import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-wiki');
}

export default function NewXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-wiki" />;
}
