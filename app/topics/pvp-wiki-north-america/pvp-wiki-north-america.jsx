import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-north-america');
}

export default function PvpWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-north-america" />;
}
