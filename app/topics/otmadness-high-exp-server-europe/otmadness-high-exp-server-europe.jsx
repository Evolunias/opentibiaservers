import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-europe');
}

export default function OtmadnessHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-europe" />;
}
