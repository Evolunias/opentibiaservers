import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-north-america');
}

export default function NonPvpWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-north-america" />;
}
