import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-wiki');
}

export default function HighrateTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-wiki" />;
}
