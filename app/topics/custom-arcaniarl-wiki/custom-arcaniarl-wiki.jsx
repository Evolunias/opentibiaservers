import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-wiki');
}

export default function CustomArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-wiki" />;
}
