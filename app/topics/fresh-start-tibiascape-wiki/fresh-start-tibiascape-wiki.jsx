import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-wiki');
}

export default function FreshStartTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-wiki" />;
}
