import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-wiki');
}

export default function TopArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-wiki" />;
}
