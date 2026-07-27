import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-wiki');
}

export default function BestThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-wiki" />;
}
