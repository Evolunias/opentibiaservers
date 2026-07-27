import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-website');
}

export default function HighrateOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-website" />;
}
