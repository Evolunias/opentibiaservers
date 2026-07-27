import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-website');
}

export default function HighrateMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-website" />;
}
