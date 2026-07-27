import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-login');
}

export default function OldSchoolClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-login" />;
}
