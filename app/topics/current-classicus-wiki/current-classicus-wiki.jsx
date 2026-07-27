import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-wiki');
}

export default function CurrentClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-wiki" />;
}
