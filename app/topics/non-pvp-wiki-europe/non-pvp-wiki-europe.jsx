import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-europe');
}

export default function NonPvpWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-europe" />;
}
