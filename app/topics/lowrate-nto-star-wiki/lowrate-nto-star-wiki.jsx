import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-wiki');
}

export default function LowrateNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-wiki" />;
}
