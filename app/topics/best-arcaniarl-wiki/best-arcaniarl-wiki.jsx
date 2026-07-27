import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-wiki');
}

export default function BestArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-wiki" />;
}
