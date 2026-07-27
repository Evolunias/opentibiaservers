import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-wiki');
}

export default function CurrentAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-wiki" />;
}
