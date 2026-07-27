import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-wiki');
}

export default function LowrateTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-wiki" />;
}
