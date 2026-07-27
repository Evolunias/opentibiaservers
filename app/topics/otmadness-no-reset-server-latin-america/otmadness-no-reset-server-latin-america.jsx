import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-latin-america');
}

export default function OtmadnessNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-latin-america" />;
}
