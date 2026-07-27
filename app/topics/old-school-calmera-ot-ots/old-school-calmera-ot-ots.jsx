import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-ots');
}

export default function OldSchoolCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-ots" />;
}
