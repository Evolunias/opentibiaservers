import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-wiki');
}

export default function FreshStartClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-wiki" />;
}
