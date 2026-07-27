import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-wiki');
}

export default function HighrateOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-wiki" />;
}
