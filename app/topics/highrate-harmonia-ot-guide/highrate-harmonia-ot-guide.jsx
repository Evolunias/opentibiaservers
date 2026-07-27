import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-guide');
}

export default function HighrateHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-guide" />;
}
