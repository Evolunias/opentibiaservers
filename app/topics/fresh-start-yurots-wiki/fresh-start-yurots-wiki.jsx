import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-wiki');
}

export default function FreshStartYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-wiki" />;
}
