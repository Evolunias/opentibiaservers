import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-client');
}

export default function HighrateOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-client" />;
}
