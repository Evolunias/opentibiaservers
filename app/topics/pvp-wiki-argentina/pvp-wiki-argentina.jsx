import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-argentina');
}

export default function PvpWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-argentina" />;
}
