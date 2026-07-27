import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-wiki');
}

export default function HighrateMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-wiki" />;
}
