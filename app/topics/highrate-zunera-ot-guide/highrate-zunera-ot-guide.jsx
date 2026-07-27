import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-guide');
}

export default function HighrateZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-guide" />;
}
