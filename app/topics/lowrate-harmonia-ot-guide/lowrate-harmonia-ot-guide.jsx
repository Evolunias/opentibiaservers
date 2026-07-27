import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-guide');
}

export default function LowrateHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-guide" />;
}
