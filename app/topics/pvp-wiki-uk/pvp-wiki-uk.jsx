import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-uk');
}

export default function PvpWikiUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-uk" />;
}
