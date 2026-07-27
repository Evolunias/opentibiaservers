import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-wiki');
}

export default function CurrentSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-wiki" />;
}
