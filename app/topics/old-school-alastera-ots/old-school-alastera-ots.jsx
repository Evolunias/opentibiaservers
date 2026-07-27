import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-ots');
}

export default function OldSchoolAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-ots" />;
}
