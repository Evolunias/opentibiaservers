import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-wiki');
}

export default function FreshStartSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-wiki" />;
}
