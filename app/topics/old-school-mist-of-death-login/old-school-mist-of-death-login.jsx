import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-login');
}

export default function OldSchoolMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-login" />;
}
