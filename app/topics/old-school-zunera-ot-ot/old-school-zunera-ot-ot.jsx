import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-ot');
}

export default function OldSchoolZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-ot" />;
}
