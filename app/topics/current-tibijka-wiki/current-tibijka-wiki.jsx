import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-wiki');
}

export default function CurrentTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-wiki" />;
}
