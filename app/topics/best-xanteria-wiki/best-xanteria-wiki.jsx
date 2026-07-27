import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-wiki');
}

export default function BestXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-wiki" />;
}
