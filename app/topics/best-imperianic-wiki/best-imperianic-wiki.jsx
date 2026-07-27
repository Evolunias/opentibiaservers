import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-wiki');
}

export default function BestImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-wiki" />;
}
