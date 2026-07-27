import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-usa');
}

export default function OtmadnessHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-usa" />;
}
