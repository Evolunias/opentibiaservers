import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-usa');
}

export default function OtmadnessLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-usa" />;
}
