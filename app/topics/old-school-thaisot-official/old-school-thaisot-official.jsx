import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-official');
}

export default function OldSchoolThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-official" />;
}
