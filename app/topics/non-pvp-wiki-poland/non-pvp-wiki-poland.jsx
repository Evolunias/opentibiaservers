import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-poland');
}

export default function NonPvpWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-poland" />;
}
