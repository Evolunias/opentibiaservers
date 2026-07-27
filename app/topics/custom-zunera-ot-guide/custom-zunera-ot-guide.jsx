import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-guide');
}

export default function CustomZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-guide" />;
}
