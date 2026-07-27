import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-ots');
}

export default function LowrateOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-ots" />;
}
