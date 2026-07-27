import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera');
}

export default function OldSchoolAlasteraKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera" />;
}
