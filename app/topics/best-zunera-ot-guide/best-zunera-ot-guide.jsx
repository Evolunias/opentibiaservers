import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-guide');
}

export default function BestZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-guide" />;
}
