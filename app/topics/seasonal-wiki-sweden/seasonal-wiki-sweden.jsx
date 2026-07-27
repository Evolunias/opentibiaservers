import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-sweden');
}

export default function SeasonalWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-sweden" />;
}
