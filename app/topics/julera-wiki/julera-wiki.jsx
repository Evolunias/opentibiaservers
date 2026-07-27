import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-wiki');
}

export default function JuleraWikiKeywordPage() {
  return <StaticKeywordPage slug="julera-wiki" />;
}
