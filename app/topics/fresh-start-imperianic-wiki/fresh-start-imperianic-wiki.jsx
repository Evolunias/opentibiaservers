import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-wiki');
}

export default function FreshStartImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-wiki" />;
}
