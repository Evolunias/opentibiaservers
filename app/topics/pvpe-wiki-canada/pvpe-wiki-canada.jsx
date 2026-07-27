import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-canada');
}

export default function PvpeWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-canada" />;
}
