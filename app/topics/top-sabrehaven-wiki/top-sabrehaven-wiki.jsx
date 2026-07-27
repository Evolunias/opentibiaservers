import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-wiki');
}

export default function TopSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-wiki" />;
}
