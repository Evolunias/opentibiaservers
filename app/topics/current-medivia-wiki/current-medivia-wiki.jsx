import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-wiki');
}

export default function CurrentMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-wiki" />;
}
