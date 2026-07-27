import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-wiki');
}

export default function PopularArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-wiki" />;
}
