import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-wiki');
}

export default function FreshStartAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-wiki" />;
}
