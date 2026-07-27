import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-ots');
}

export default function OldSchoolInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-ots" />;
}
