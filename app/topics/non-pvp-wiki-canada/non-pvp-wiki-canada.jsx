import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-canada');
}

export default function NonPvpWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-canada" />;
}
