import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-germany');
}

export default function OtmadnessLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-germany" />;
}
