import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-wiki');
}

export default function TopTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-wiki" />;
}
