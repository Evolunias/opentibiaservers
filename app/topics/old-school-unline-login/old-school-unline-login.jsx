import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-login');
}

export default function OldSchoolUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-login" />;
}
