import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-wiki');
}

export default function BestTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-wiki" />;
}
