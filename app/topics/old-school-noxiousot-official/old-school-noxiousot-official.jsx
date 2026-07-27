import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-official');
}

export default function OldSchoolNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-official" />;
}
