import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-wiki');
}

export default function FreshStartEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-wiki" />;
}
