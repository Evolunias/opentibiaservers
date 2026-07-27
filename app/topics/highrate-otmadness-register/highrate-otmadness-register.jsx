import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-register');
}

export default function HighrateOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-register" />;
}
