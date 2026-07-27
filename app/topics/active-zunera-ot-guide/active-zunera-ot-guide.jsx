import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-guide');
}

export default function ActiveZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-guide" />;
}
