import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-usa');
}

export default function OtmadnessNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-usa" />;
}
