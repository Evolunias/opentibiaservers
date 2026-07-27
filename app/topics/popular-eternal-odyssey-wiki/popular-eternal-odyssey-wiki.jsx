import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-wiki');
}

export default function PopularEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-wiki" />;
}
