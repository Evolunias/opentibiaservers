import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-guide');
}

export default function FreshStartZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-guide" />;
}
