import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-register');
}

export default function NoResetOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-register" />;
}
