import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-uk');
}

export default function PvpeWikiUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-uk" />;
}
