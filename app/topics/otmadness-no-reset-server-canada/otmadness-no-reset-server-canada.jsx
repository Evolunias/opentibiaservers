import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-canada');
}

export default function OtmadnessNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-canada" />;
}
