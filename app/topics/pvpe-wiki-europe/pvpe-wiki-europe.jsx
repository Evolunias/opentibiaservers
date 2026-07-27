import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-europe');
}

export default function PvpeWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-europe" />;
}
