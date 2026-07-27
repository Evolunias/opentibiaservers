import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-wiki');
}

export default function CurrentArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-wiki" />;
}
