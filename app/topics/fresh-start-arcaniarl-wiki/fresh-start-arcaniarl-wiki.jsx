import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-wiki');
}

export default function FreshStartArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-wiki" />;
}
