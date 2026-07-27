import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-germany');
}

export default function SeasonalWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-germany" />;
}
