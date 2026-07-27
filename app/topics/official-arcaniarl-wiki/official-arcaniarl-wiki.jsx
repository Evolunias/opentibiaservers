import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-wiki');
}

export default function OfficialArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-wiki" />;
}
