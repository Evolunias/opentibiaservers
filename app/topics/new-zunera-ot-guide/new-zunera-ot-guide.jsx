import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-guide');
}

export default function NewZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-guide" />;
}
