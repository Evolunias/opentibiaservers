import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-wiki');
}

export default function PopularMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-wiki" />;
}
