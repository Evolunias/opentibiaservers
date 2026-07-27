import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-brazil');
}

export default function OtmadnessNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-brazil" />;
}
