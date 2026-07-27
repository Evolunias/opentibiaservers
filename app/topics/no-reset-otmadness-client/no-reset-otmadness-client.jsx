import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-client');
}

export default function NoResetOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-client" />;
}
