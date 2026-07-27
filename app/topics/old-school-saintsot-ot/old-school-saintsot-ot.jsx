import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-ot');
}

export default function OldSchoolSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-ot" />;
}
