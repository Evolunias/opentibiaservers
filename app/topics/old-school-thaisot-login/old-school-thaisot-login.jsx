import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-login');
}

export default function OldSchoolThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-login" />;
}
