import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-wiki');
}

export default function LowrateTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-wiki" />;
}
