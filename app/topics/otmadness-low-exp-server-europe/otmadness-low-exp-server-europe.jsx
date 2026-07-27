import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-europe');
}

export default function OtmadnessLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-europe" />;
}
