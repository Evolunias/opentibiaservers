import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-mexico');
}

export default function NonPvpWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-mexico" />;
}
