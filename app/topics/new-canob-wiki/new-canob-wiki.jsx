import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-wiki');
}

export default function NewCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="new-canob-wiki" />;
}
