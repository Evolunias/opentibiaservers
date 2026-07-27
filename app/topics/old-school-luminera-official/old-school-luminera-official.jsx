import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-official');
}

export default function OldSchoolLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-official" />;
}
