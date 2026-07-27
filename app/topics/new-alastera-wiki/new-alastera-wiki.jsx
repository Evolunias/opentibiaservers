import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-wiki');
}

export default function NewAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-wiki" />;
}
