import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-wiki-south-america');
}

export default function SeasonalWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-wiki-south-america" />;
}
