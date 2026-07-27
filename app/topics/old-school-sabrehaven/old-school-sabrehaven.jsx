import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven');
}

export default function OldSchoolSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven" />;
}
