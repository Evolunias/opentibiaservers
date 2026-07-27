import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-login');
}

export default function OldSchoolEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-login" />;
}
