import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-wiki');
}

export default function HighrateThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-wiki" />;
}
