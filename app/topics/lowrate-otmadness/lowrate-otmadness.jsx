import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness');
}

export default function LowrateOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness" />;
}
