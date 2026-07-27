import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-wiki');
}

export default function CurrentDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-wiki" />;
}
