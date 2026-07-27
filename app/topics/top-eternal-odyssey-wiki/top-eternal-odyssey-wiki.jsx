import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-wiki');
}

export default function TopEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-wiki" />;
}
