import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-website');
}

export default function HighrateEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-website" />;
}
