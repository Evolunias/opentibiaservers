import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-south-america');
}

export default function EvoWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-south-america" />;
}
