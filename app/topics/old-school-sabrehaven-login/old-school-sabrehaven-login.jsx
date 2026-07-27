import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-login');
}

export default function OldSchoolSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-login" />;
}
