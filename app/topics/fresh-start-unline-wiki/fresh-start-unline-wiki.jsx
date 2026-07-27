import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-wiki');
}

export default function FreshStartUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-wiki" />;
}
