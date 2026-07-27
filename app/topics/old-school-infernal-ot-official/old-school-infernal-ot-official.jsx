import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-official');
}

export default function OldSchoolInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-official" />;
}
