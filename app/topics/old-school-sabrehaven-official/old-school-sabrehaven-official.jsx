import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-official');
}

export default function OldSchoolSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-official" />;
}
