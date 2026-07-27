import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-europe');
}

export default function OtmadnessNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-europe" />;
}
