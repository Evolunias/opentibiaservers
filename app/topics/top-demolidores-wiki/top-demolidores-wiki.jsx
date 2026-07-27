import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-wiki');
}

export default function TopDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-wiki" />;
}
