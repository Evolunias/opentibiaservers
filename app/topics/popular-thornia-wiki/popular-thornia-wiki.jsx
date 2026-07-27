import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-wiki');
}

export default function PopularThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-wiki" />;
}
