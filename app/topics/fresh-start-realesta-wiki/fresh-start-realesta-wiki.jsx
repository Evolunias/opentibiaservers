import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-wiki');
}

export default function FreshStartRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-wiki" />;
}
