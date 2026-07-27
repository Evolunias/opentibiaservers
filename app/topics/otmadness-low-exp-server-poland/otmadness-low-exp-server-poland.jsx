import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-poland');
}

export default function OtmadnessLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-poland" />;
}
