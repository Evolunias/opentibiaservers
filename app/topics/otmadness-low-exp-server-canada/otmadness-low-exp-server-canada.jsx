import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-canada');
}

export default function OtmadnessLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-canada" />;
}
