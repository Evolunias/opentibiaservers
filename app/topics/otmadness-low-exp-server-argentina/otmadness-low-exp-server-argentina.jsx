import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-argentina');
}

export default function OtmadnessLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-argentina" />;
}
