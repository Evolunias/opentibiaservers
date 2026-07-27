import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-login');
}

export default function OldSchoolCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-login" />;
}
