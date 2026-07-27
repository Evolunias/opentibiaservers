import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-south-america');
}

export default function NonPvpWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-south-america" />;
}
