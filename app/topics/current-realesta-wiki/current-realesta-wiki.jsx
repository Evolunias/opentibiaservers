import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-wiki');
}

export default function CurrentRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-wiki" />;
}
