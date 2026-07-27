import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-ot');
}

export default function OldSchoolNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-ot" />;
}
