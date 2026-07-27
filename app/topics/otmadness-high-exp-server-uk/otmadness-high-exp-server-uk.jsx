import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-uk');
}

export default function OtmadnessHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-uk" />;
}
