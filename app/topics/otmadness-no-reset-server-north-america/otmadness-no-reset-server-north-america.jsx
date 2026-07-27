import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-north-america');
}

export default function OtmadnessNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-north-america" />;
}
