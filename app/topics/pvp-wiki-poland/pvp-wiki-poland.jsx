import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-poland');
}

export default function PvpWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-poland" />;
}
