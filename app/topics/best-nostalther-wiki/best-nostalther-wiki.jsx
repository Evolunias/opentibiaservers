import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-wiki');
}

export default function BestNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-wiki" />;
}
