import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-ots');
}

export default function OldSchoolHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-ots" />;
}
