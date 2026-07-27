import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-ots');
}

export default function HighrateMadnessaliveOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-ots" />;
}
