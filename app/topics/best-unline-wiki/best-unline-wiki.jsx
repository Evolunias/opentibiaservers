import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-wiki');
}

export default function BestUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="best-unline-wiki" />;
}
