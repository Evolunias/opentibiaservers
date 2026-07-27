import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-login');
}

export default function OldSchoolNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-login" />;
}
