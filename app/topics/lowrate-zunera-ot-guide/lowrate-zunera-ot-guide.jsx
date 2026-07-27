import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-guide');
}

export default function LowrateZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-guide" />;
}
