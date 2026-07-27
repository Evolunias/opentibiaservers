import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-wiki');
}

export default function ArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-wiki" />;
}
