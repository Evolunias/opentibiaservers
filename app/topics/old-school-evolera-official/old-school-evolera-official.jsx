import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-official');
}

export default function OldSchoolEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-official" />;
}
