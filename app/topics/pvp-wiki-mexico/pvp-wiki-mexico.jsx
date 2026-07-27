import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-mexico');
}

export default function PvpWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-mexico" />;
}
