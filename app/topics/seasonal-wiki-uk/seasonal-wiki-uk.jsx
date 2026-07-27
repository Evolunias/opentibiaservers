import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-uk');
}

export default function SeasonalWikiUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-uk" />;
}
