import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-poland');
}

export default function SeasonalWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-poland" />;
}
