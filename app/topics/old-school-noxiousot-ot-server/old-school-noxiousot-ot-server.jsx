import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-ot-server');
}

export default function OldSchoolNoxiousotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-ot-server" />;
}
