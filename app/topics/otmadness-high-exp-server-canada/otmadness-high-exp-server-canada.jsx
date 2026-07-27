import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-canada');
}

export default function OtmadnessHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-canada" />;
}
