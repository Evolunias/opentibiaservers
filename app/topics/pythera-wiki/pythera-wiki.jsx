import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-wiki');
}

export default function PytheraWikiKeywordPage() {
  return <StaticKeywordPage slug="pythera-wiki" />;
}
