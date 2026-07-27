import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-germany');
}

export default function OtmadnessHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-germany" />;
}
