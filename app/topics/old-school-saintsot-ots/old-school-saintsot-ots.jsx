import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-ots');
}

export default function OldSchoolSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-ots" />;
}
