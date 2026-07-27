import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-wiki');
}

export default function CurrentTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-wiki" />;
}
