import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-france');
}

export default function OtmadnessNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-france" />;
}
