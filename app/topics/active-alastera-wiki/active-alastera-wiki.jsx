import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-wiki');
}

export default function ActiveAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-wiki" />;
}
