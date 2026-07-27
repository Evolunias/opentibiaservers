import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-guide');
}

export default function OfficialZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-guide" />;
}
