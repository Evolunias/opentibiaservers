import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-sweden');
}

export default function PvpWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-sweden" />;
}
