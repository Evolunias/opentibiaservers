import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-germany');
}

export default function PvpWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-germany" />;
}
