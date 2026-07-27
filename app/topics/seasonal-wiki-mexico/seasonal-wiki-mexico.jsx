import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-mexico');
}

export default function SeasonalWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-mexico" />;
}
