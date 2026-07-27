import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-login');
}

export default function HighrateOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-login" />;
}
