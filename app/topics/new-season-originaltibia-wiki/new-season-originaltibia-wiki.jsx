import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-wiki');
}

export default function NewSeasonOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-wiki" />;
}
