import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-wiki');
}

export default function ActiveArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-wiki" />;
}
