import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-ots');
}

export default function OldSchoolMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-ots" />;
}
