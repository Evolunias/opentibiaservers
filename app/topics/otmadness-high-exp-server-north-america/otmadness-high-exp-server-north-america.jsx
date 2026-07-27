import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-north-america');
}

export default function OtmadnessHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-north-america" />;
}
