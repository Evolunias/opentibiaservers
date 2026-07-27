import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-south-america');
}

export default function PvpeWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-south-america" />;
}
