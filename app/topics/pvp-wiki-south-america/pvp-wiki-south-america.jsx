import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-south-america');
}

export default function PvpWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-south-america" />;
}
