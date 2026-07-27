import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-login');
}

export default function OldSchoolAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-login" />;
}
