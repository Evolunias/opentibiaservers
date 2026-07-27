import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-official');
}

export default function OldSchoolUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-official" />;
}
