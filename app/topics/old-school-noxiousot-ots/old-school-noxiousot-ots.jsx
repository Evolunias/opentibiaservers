import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-ots');
}

export default function OldSchoolNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-ots" />;
}
