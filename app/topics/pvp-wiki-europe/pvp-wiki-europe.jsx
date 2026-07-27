import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-europe');
}

export default function PvpWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-europe" />;
}
