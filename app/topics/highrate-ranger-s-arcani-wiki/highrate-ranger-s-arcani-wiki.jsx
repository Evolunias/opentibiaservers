import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-wiki');
}

export default function HighrateRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-wiki" />;
}
