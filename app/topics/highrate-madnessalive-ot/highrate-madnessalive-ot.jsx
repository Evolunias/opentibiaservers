import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-ot');
}

export default function HighrateMadnessaliveOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-ot" />;
}
