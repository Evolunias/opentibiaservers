import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-wiki');
}

export default function BestDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-wiki" />;
}
