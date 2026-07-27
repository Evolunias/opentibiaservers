import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp');
}

export default function OtmadnessHighExpKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp" />;
}
