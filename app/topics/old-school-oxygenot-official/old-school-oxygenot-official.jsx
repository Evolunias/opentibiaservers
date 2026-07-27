import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-official');
}

export default function OldSchoolOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-official" />;
}
