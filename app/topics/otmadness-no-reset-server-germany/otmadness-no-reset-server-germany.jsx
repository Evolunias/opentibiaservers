import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-germany');
}

export default function OtmadnessNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-germany" />;
}
