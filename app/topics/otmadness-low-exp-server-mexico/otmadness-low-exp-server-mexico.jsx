import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-mexico');
}

export default function OtmadnessLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-mexico" />;
}
