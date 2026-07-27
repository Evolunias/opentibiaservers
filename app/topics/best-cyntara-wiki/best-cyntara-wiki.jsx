import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-wiki');
}

export default function BestCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-wiki" />;
}
