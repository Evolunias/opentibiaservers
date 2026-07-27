import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-wiki');
}

export default function HighrateMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-wiki" />;
}
