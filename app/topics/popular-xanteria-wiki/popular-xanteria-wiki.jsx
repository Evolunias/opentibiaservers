import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-wiki');
}

export default function PopularXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-wiki" />;
}
