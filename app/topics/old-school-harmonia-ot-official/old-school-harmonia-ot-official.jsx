import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-official');
}

export default function OldSchoolHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-official" />;
}
