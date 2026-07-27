import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-official');
}

export default function OldSchoolAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-official" />;
}
