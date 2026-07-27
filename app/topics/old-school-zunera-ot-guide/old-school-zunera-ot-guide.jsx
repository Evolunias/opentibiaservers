import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-guide');
}

export default function OldSchoolZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-guide" />;
}
