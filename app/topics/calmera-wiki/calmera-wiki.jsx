import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-wiki');
}

export default function CalmeraWikiKeywordPage() {
  return <StaticKeywordPage slug="calmera-wiki" />;
}
