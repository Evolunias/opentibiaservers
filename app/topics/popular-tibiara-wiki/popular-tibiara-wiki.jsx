import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-wiki');
}

export default function PopularTibiaraWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-wiki" />;
}
