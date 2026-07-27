import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-wiki');
}

export default function FreshStartDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-wiki" />;
}
