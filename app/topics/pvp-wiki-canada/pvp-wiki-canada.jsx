import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-canada');
}

export default function PvpWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-canada" />;
}
