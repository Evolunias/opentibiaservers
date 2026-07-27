import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-mexico');
}

export default function OtmadnessHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-mexico" />;
}
