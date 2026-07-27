import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-poland');
}

export default function OtmadnessNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-poland" />;
}
