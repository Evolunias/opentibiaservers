import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-poland');
}

export default function OtmadnessHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-poland" />;
}
