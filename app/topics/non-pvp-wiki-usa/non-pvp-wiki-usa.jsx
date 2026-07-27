import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-wiki-usa');
}

export default function NonPvpWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-wiki-usa" />;
}
