import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-south-america');
}

export default function OtmadnessHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-south-america" />;
}
