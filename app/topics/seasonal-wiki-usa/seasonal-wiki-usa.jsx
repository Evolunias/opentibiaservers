import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-usa');
}

export default function SeasonalWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-usa" />;
}
