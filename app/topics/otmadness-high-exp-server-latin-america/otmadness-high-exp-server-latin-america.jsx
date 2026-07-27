import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-latin-america');
}

export default function OtmadnessHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-latin-america" />;
}
