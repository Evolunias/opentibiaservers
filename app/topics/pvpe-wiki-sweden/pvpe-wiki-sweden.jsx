import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-sweden');
}

export default function PvpeWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-sweden" />;
}
