import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-wiki');
}

export default function LowrateArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-wiki" />;
}
