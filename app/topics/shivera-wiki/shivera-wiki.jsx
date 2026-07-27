import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-wiki');
}

export default function ShiveraWikiKeywordPage() {
  return <StaticKeywordPage slug="shivera-wiki" />;
}
