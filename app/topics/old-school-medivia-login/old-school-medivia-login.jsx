import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-login');
}

export default function OldSchoolMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-login" />;
}
