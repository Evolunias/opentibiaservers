import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-wiki');
}

export default function CurrentCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="current-canob-wiki" />;
}
