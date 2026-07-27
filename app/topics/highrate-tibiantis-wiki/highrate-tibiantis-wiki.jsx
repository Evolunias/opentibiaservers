import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-wiki');
}

export default function HighrateTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-wiki" />;
}
