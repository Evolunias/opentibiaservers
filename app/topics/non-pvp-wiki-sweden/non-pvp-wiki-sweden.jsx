import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-sweden');
}

export default function NonPvpWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-sweden" />;
}
