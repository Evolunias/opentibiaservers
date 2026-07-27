import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-register');
}

export default function OldSchoolThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-register" />;
}
