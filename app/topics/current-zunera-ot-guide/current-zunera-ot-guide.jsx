import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-guide');
}

export default function CurrentZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-guide" />;
}
