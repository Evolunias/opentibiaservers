import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-argentina');
}

export default function PvpeWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-argentina" />;
}
