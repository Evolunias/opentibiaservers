import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-login');
}

export default function OldSchoolKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-login" />;
}
