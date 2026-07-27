import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-germany');
}

export default function NonPvpWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-germany" />;
}
