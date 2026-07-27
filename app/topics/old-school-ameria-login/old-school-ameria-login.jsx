import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-login');
}

export default function OldSchoolAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-login" />;
}
