import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-login');
}

export default function NoResetOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-login" />;
}
