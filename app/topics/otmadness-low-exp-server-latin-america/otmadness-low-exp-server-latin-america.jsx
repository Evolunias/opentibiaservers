import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-latin-america');
}

export default function OtmadnessLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-latin-america" />;
}
