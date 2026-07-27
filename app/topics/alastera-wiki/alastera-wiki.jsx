import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-wiki');
}

export default function AlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="alastera-wiki" />;
}
