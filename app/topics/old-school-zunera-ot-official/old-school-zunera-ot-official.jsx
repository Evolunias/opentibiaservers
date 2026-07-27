import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-official');
}

export default function OldSchoolZuneraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-official" />;
}
