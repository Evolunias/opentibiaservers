import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-poland');
}

export default function PvpeWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-poland" />;
}
