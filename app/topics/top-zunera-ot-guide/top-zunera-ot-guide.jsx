import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-guide');
}

export default function TopZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-guide" />;
}
