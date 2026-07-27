import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-wiki');
}

export default function FreshStartXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-wiki" />;
}
