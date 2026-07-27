import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-uk');
}

export default function OtmadnessLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-uk" />;
}
