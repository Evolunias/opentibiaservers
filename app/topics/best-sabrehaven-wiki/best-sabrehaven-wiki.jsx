import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-wiki');
}

export default function BestSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-wiki" />;
}
