import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-wiki');
}

export default function CurrentTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-wiki" />;
}
