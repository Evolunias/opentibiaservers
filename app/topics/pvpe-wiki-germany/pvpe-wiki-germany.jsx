import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-germany');
}

export default function PvpeWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-germany" />;
}
