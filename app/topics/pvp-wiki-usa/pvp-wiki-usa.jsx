import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-wiki-usa');
}

export default function PvpWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-wiki-usa" />;
}
