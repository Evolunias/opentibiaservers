import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-wiki');
}

export default function BestAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-wiki" />;
}
