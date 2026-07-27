import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-wiki');
}

export default function HighrateTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-wiki" />;
}
