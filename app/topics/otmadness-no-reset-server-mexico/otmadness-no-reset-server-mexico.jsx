import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-mexico');
}

export default function OtmadnessNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-mexico" />;
}
