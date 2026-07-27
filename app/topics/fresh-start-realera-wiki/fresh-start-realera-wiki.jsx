import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-wiki');
}

export default function FreshStartRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-wiki" />;
}
