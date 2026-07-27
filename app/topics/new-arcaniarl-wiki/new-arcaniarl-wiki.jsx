import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-wiki');
}

export default function NewArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-wiki" />;
}
