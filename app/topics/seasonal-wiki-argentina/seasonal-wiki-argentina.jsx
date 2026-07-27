import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-argentina');
}

export default function SeasonalWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-argentina" />;
}
