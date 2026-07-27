import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-wiki');
}

export default function ForteraWikiKeywordPage() {
  return <StaticKeywordPage slug="fortera-wiki" />;
}
