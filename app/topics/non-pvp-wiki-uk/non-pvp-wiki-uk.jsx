import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-uk');
}

export default function NonPvpWikiUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-uk" />;
}
