import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-wiki');
}

export default function CurrentXanteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-wiki" />;
}
