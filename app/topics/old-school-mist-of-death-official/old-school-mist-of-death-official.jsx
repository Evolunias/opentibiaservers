import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-official');
}

export default function OldSchoolMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-official" />;
}
