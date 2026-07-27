import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-wiki');
}

export default function TopCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="top-canob-wiki" />;
}
