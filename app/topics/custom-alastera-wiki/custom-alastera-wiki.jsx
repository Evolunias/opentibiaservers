import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-wiki');
}

export default function CustomAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-wiki" />;
}
