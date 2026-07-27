import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-ot');
}

export default function LowrateOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-ot" />;
}
