import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-argentina');
}

export default function NonPvpWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-argentina" />;
}
