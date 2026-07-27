import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-wiki');
}

export default function BestMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-wiki" />;
}
