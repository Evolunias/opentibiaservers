import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-login');
}

export default function OldSchoolNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-login" />;
}
