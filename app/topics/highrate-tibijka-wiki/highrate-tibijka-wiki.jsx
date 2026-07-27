import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-wiki');
}

export default function HighrateTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-wiki" />;
}
