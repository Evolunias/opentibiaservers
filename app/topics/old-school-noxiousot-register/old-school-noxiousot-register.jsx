import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-register');
}

export default function OldSchoolNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-register" />;
}
