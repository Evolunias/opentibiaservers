import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-login');
}

export default function OldSchoolSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-login" />;
}
