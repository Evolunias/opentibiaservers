import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-ot');
}

export default function OldSchoolAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-ot" />;
}
