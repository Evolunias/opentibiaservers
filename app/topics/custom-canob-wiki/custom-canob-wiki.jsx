import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-wiki');
}

export default function CustomCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-wiki" />;
}
