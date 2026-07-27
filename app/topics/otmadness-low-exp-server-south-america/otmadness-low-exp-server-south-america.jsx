import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-south-america');
}

export default function OtmadnessLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-south-america" />;
}
