import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-north-america');
}

export default function PvpeWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-north-america" />;
}
