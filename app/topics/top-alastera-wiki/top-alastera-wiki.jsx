import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-wiki');
}

export default function TopAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-wiki" />;
}
