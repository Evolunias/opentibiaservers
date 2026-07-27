import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-wiki');
}

export default function CurrentRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="current-realera-wiki" />;
}
