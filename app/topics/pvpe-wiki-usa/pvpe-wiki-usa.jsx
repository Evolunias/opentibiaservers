import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-usa');
}

export default function PvpeWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-usa" />;
}
