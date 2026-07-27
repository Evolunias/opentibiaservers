import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-login');
}

export default function OldSchoolRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-login" />;
}
