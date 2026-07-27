import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive');
}

export default function HighrateMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive" />;
}
