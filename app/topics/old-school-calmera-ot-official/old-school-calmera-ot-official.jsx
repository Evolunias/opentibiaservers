import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-official');
}

export default function OldSchoolCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-official" />;
}
