import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-france');
}

export default function OtmadnessHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-france" />;
}
