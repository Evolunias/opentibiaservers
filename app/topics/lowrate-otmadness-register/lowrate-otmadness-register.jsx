import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-register');
}

export default function LowrateOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-register" />;
}
