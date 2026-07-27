import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-mexico');
}

export default function PvpeWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-mexico" />;
}
